import ProductStore from "@/store/ProductStore";
import UserStore from "@/store/UserStore";

export default interface MobxProvoderType {
    user: UserStore;
    product: ProductStore;
}