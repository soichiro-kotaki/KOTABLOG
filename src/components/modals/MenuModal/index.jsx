/**
 * modals/MenuModal
 */

/* styles */
import { Presenter } from "./Presenter";
// import styles from "./styles.module.scss";

/**
 * MenuModal
 */
export const MenuModal = (props) => {
    /* props */
    const { isMenuModalVisible, handleCloseMenuModal } = props;
    /* hooks */
    return (
        <Presenter
            isMenuModalVisible={isMenuModalVisible}
            handleCloseMenuModal={handleCloseMenuModal}
        />
    );
};
