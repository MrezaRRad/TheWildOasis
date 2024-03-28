/* eslint-disable no-unused-vars */

import { supabase, supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded baby!");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function createEditCabin(cabin, cabinId) {
  //https://eipcrfrjvmopqbxutboz.supabase.co/storage/v1/object/public/cabin-images/cabin-008.jpg

  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const imageUrl = typeof cabin.image === "string" ? cabin.image : imagePath;

  let newCabinId;
  //1. Create cabin
  if (cabinId) {
    const { error } = await supabase
      .from("cabins")
      .update({ ...cabin, image: imageUrl })
      .eq("id", cabinId)
      .select();

    if (error) console.error(error);
  } else {
    const { data, error } = await supabase
      .from("cabins")
      .insert([{ ...cabin, image: imageUrl }])
      .select();

    newCabinId = data.id;
    if (error) {
      console.log(error);
      throw new Error("Can not create new cabin");
    }
  }

  //2. upload image
  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  //3.Delete cabin IF there is an error while uploading image
  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", newCabinId);
    console.log(uploadError);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }
}
