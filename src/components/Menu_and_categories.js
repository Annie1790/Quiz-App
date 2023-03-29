//SCSS
import "../style/Menu_and_categories.scss"
//Animation
import { motion } from 'framer-motion';

const Menu_and_categories = ({ clickOnGame }) => {

    const france = () => {
        clickOnGame("france")
    };

    const hungary = () => {
        clickOnGame("hungary")
    };

    const italy = () => {
        clickOnGame("italy")
    };

    const usa = () => {
        clickOnGame("usa")
    };

    const portugal = () => {
        clickOnGame("portugal")
    };



    return (
        <motion.div id="menu-margin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <h1>Fancy for a quiz?</h1>
            </div>
            <div id="categories-wrapper">
                <button className="categories-flex" onClick={france}>
                    <p>🇫🇷 France</p>
                </button>
                <button className="categories-flex" onClick={hungary}>
                    <p>🇭🇺 Hungary</p>
                </button>
                <button className="categories-flex" onClick={italy}>
                    <p>🇮🇹 Italy</p>
                </button>
                <button className="categories-flex" onClick={usa}>
                    <p>🇺🇸 United States</p>
                </button>
                <button className="categories-flex" onClick={portugal}>
                    <p>🇵🇹 Portugal</p>
                </button>
            </div>
        </motion.div>
    )
};

export default Menu_and_categories;