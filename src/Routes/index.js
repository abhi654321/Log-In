import Address from "../Cumponents/Address";
import Invoices from "../Cumponents/Invoices";
import Notification from "../Cumponents/Notification";
import Orders from "../Cumponents/Orders";
import RefferalAndEarn from "../Cumponents/ReferalAndEarn";
import Wishlist from "../Cumponents/Wishlist";

export const routes = [
    {
    id:1,
    label:"Refferal & earn",
    navlink:"/refferal-and-earn",
    component:<RefferalAndEarn />
},{
    id:2,
    label:"Orders",
    navlink:"/orders",
    component:<Orders/>
},{
    id:3,
    label:"Invoices",
    navlink:"/invoices",
    component:<Invoices/>
},{
    id:4,
    label:"WishList",
    navlink:"/wishList",
    component:<Wishlist />
},{
    id:5,
    label:"Address",
    navlink:"/address",
    component:<Address />
},{
    id:6,
    label:"Notifications",
    navlink:"/notifications",
    component:<Notification />
}]