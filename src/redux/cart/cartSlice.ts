import { showToast } from "@/src/utils/toast";
import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "cart";


const initialState = { courseIds: [] }; // مقدار اولیه پیش‌فرض

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        hydrateCart: (state) => {
            // فقط در مرورگر مقدار را از localStorage بارگذاری کنید
            if (typeof window !== "undefined") {
                const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
                if (storedCart) {
                    const parsedCart = JSON.parse(storedCart);
                    state.courseIds = parsedCart.courseIds || [];
                }
            }
        },

        addCourse: (state: any, action) => {
            const { courseId } = action.payload;
            if (!state?.courseIds?.includes(courseId)) {
                state.courseIds.push(courseId);
                if (typeof window !== "undefined") {
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
                    showToast({ message: 'به سبد خرید شما اضافه شد.', type: 'success' })

                }
            } else {
                showToast({ message: 'این دوره قبلا اضافه شده.', type: 'error' })
            }
        },

        deleteCourse: (state: any, action) => {
            const { courseId } = action.payload;
            const index = state.courseIds.indexOf(courseId);
            if (index > -1) {
                state.courseIds.splice(index, 1);
                if (typeof window !== "undefined") {
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
                    showToast({ message: 'با موفقیت حذف شد.', type: 'success' })

                }
            }
        },

        deleteCourses: (state: any, action) => {
            const { courseIds } = action.payload;

            courseIds?.forEach((courseId: any) => {
                const index = state.courseIds.indexOf(courseId);
                if (index > -1) {
                    state.courseIds.splice(index, 1);
                    if (typeof window !== "undefined") {
                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
                    }
                }
            });

        },

        clearCart: (state: any) => {
            state.courseIds = [];
            if (typeof window !== "undefined") {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
            }
        }
    }
});

export const { hydrateCart, addCourse, deleteCourse, clearCart ,deleteCourses} = cartSlice.actions;
export default cartSlice.reducer;
