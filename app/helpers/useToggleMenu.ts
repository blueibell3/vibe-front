import { useState } from 'react';

const useToggleMenu = () => {
    const [currentCardId, setCurrentCardId] = useState<number | null>();

    const toggleMenu = (id: number) => {
        if (currentCardId === id) {
            setCurrentCardId(null);
        } else {
            setCurrentCardId(id);
        }
    };

    return { currentCardId, toggleMenu };
};

export default useToggleMenu;
