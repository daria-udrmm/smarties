import '../../style/style.scss'
import 'normalize.css';
import Header from '../header/Header'
import First from '../first/First'
import About from '../about/About'
import Vision from '../vision/Vision'
import How from '../how/How'
import Rarity from '../rarity/Rarity'
import Learn from '../learn/Learn'
import Tree from '../tree/Tree'
import Faq from '../faq/Faq'
import Team from '../team/Team'
import Last from '../last/Last'
import Footer from '../footer/Footer'

const App = () => {
    return(
        <>
            <Header/>
            <First/>
            <About/>
            <Vision/>
            <How/>
            <Rarity/>
            <Learn/>
            <Tree/>
            <Faq/>
            <Team/>
            <Last/>
            <Footer/>
        </>
    )
}
export default App;