import { useMutation } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: (data) => {
      console.log(data);
      updateSettingApi(data);
    },
    onSuccess: () => {
      toast.success("Setting updated seccessfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
  });

  return { updateSetting, isUpdating };
}
