import { create } from "zustand";

// Define a type for the state
interface AuthState {
    isAuth: boolean;
    authUser: null;
    login: (data: any) => void;
    logout: () => void;
}

// Create the Zustand store with the state type
const useAuth = create<AuthState>((set) => ({
    isAuth: false, // initial state
    authUser: null,
    login: (data) => {
        set({ isAuth: true })
        set({ authUser: data })
    }, // login action
    logout: () => set({ isAuth: false }), // logout action
}));

export default useAuth;
