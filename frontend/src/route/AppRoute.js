import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../components/assets/scss/index.scss'
import AboutUsPage from '../components/pages/AboutUsPage'
import AccountInfoPage from '../components/pages/AccountInfoPage'
import AccountPage from '../components/pages/AccountPage'
import AddressBookPage from '../components/pages/AddressBookPage'
import BestSellerPage from '../components/pages/BestSellerPage'
import CartPage from '../components/pages/CartPage'
import CustomerCarePage from '../components/pages/CustomerCarePage'
import DealHotPage from '../components/pages/DealHotPage'
import FavouritesListPage from '../components/pages/FavouritesListPage'
import ForgotPasswordPage from '../components/pages/ForgotPasswordPage'
import HomePage from '../components/pages/HomePage'
import HomeResPage from '../components/pages/HomeResPage'
import LoginPage from '../components/pages/LoginPage'
import NewProductsPage from '../components/pages/NewProductsPage'
import OrderPage from '../components/pages/OrderPage'
import PolicyPage from '../components/pages/PolicyPage'
import ProductByCategoryPage from '../components/pages/ProductByCategoryPage'
import ProductDetailPage from '../components/pages/ProductDetailPage'
import RegisterPage from '../components/pages/RegisterPage'
import SearchPage from '../components/pages/SearchPage'
import SeenPage from '../components/pages/SeenPage'
import StoresPage from '../components/pages/StoresPage'
import StoryPage from '../components/pages/StoryPage'
import TermsConditionsPage from '../components/pages/TermsConditionsPage'
import ProductByCategoryParentPage from '../components/pages/ProductByCategoryParentPage'
import ErrorPage from '../components/pages/ErrorPage'
import AdminTemplate from '../admin/home/AdminTemplate'
import PrintOrder from '../admin/order/PrintOrder'
import PayPage from '../components/pages/PayPage'
import NewAddressPage from '../components/pages/NewAddressPage'
import EditAddressPage from '../components/pages/EditAddressPage'
import ResetPasswordPage from '../components/pages/ResetPasswordPage'
import RecipePage from '../components/pages/RecipePage'
import RecipeDetailPage from '../components/pages/RecipeDetailPage'
import GuidePage from '../components/pages/GuidePage'
import LNLTVPage from '../components/pages/LNLTVPage'
import LNLTVDetailPage from '../components/pages/LNLTVDetailPage'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/dashboard/*' element={<AdminTemplate/>}></Route>
        <Route path='/print/:id' element={<PrintOrder/>}></Route>

        <Route path='/search' element={<SearchPage/>}></Route>
        <Route path='/newproducts' element={<NewProductsPage/>}></Route>
        <Route path='/dealhot' element={<DealHotPage/>}></Route>
        <Route path='/bestseller' element={<BestSellerPage/>}></Route>
        <Route path='/productbycategory/:id' element={<ProductByCategoryPage/>}></Route>
        <Route path='/productbycategoryparent/:id' element={<ProductByCategoryParentPage/>}></Route>
        <Route path='/productdetail/:id' element={<ProductDetailPage/>}></Route>
        
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/pay' element={<PayPage/>}></Route>

        <Route path='/favouriteslist' element={<FavouritesListPage/>}></Route>
        <Route path='/seen' element={<SeenPage/>}></Route>

        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPasswordPage/>}></Route>
        <Route path='/resetpassword/:id' element={<ResetPasswordPage/>}></Route>

        <Route path='/account' element={<AccountPage/>}></Route>
        <Route path='/order' element={<OrderPage/>}></Route>
        <Route path='/addressbook' element={<AddressBookPage/>}></Route>
        <Route path='/newaddress' element={<NewAddressPage/>}></Route>
        <Route path='/edit/address/:id' element={<EditAddressPage/>}></Route>
        <Route path='/accountinfo' element={<AccountInfoPage/>}></Route>

        <Route path='/stores' element={<StoresPage/>}></Route>
        <Route path='/customercare' element={<CustomerCarePage/>}></Route>
        <Route path='/policy' element={<PolicyPage/>}></Route>
        <Route path='/aboutus' element={<AboutUsPage/>}></Route>
        <Route path='/termsconditions' element={<TermsConditionsPage/>}></Route>

        <Route path='/recipe' element={<RecipePage/>}></Route>
        <Route path='/recipe/:id' element={<RecipeDetailPage/>}></Route>
        <Route path='/productguide' element={<GuidePage/>}></Route>
        <Route path='/locknlocktv' element={<LNLTVPage/>}></Route>
        <Route path='/locknlocktv/:id' element={<LNLTVDetailPage/>}></Route>
        <Route path='/story' element={<StoryPage/>}></Route>
        
        <Route path='/res' element={<HomeResPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>

    </Routes>
  )
}

export default AppRoute