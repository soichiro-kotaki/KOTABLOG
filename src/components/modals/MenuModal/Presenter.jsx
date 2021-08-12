import Modal from "react-modal";
import { Link as Scroll } from "react-scroll";

import styles from "./styles.module.scss";

Modal.setAppElement("#__next");

export const Presenter = (props) => {
    /* props */
    const { isMenuModalVisible, handleCloseMenuModal } = props;
    /* hooks */

    return (
        <Modal
            isOpen={isMenuModalVisible}
            onRequestClose={handleCloseMenuModal}
            overlayClassName={{
                base: styles.overlay_base,
                afterOpen: styles.overlay_after,
                beforeClose: styles.overlay_before,
            }}
            className={{
                base: styles.content_base,
                afterOpen: styles.content_after,
                beforeClose: styles.content_before,
            }}
            closeTimeoutMS={500}
        >
            <ul className={styles.nav}>
                <li className={styles.title}>Menu</li>
                <li className={styles.link}>
                    <Scroll
                        to="news"
                        offset={-130}
                        duration={600}
                        smooth={true}
                    >
                        <span className={styles.subtitle}>News</span>
                    </Scroll>
                </li>
                <li className={styles.link}>
                    <Scroll
                        to="about"
                        offset={-90}
                        duration={600}
                        smooth={true}
                    >
                        <span className={styles.subtitle}>About</span>
                    </Scroll>
                </li>
                <li className={styles.link}>
                    <Scroll
                        to="member"
                        offset={-80}
                        duration={600}
                        smooth={true}
                    >
                        <span className={styles.subtitle}>Member</span>
                    </Scroll>
                </li>
                <li className={styles.link}>
                    <Scroll to="contact" duration={600} smooth={true}>
                        <span className={styles.subtitle}>Contact</span>
                    </Scroll>
                </li>
                <p className={styles.close} onClick={handleCloseMenuModal}>
                    Close
                </p>
            </ul>
        </Modal>
    );
};
