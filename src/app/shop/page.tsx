import Banner from "@/components/shop/Banner"
import Firstbody from "@/components/shop/Firstbody"
import Maincontent from "@/components/shop/Maincontent"
import Cards from "@/components/shop/Cards"


async function Shop() {
    return(
        <div>
            <Banner/>
            
            <Firstbody/>

            <Maincontent/>

            <Cards/>
        </div>
    )
}
export default Shop