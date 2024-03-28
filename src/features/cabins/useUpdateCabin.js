/* eslint-disable no-unused-vars */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCabin } = useMutation({
    mutationFn: ({ cabinData, id }) => {
      createEditCabin(cabinData, id);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin successfully edited");
    },
    onError: (error) => toast.error("Failed to update cabin"),
  });

  return { isUpdating, updateCabin };
}
