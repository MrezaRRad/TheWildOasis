/* eslint-disable no-unused-vars */

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const {
    isPending: isCreating,
    mutate: createCabin,
    error,
  } = useMutation({
    mutationFn: (cabin) => {
      createEditCabin(cabin);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("A new cabin added to the list");
    },
    onError: () => toast.error("Failed to create new cabin"),
  });

  return { isCreating, createCabin };
}
