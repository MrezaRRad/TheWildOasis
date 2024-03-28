import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin } from "../../services/apiCabins";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const {
    isPending: isDeleting,
    mutate: delCabin,
    error,
  } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("The cabin deleted successfully");
    },
    onError: () => {
      window.alert(error);
    },
  });

  return { isDeleting, delCabin };
}
