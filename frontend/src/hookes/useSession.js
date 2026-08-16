import { useQuery, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../Api/session.js";



export const useCreateSessions = () => {
    const result = useMutation({
        mutationKey: ["createSessions"],
        mutationFn: sessionApi.createsession,
        onSuccess: () => toast.success("Session created Sucessfully"),
        onError: (error) => toast.error(error?.response?.data?.message || "Failed to create room")
    });

    return result;
};


export const useActiveSession = () => {
    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
    });

    return result;
};


export const useMyRecentSession = () => {
    const result = useQuery({
        queryKey: ["myRecentSessions"],
        queryFn: sessionApi.getRecentSessions,
    });

    return result;
};


export const useGetSessionById = (id) => {
    const result = useQuery({
        queryKey: ["getSessionById", id],
        queryFn: sessionApi.getSessionBYId,
        enabled: !!id,
        refetchInterval: 5000
    });

    return result;
};


export const useJoinSession = (id) => {
    const result = useMutation({
        mutationKey: ["joinSession", id],
        mutationFn: sessionApi.joinSession,
        onSuccess: () => toast.success("Session joined Sucessfully"),
        onError: (error) => toast.error(error?.response?.data?.message || "Failed to join session"),
        enabled: !!id,
    });

    return result;
}


export const useEndSession = (id) => {
    const result = useMutation({
        mutationKey: ["joinSession", id],
        mutationFn: sessionApi.endSession,
        onSuccess: () => toast.success("Session end Sucessfully"),
        onError: (error) => toast.error(error?.response?.data?.message || "Failed to end session"),
        enabled: !!id,
    });

    return result;
}

