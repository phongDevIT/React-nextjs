import React from "react";
import { LayoutMain } from "@/components/layout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProperty } from "@/store/properte.service";

const create = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: addNewProperty,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["properties"] });
        },
    });
    const handleCreateNewProperty = () => {
        mutation.mutate();
    };
    return (
        <LayoutMain>
            <button
                className="py-5 px-5 text-white rounded-lg bg-blue-500 text-sm"
                onClick={handleCreateNewProperty}
            >
                Add new property
            </button>
        </LayoutMain>
    );
};

export default create;
