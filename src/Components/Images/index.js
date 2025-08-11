import { forwardRef, useState } from 'react';
import images from '../assets/images';
import classNames from 'classnames';
import styles from './image.module.scss';

const Image = forwardRef(({ src, alt, fallBack: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleFallback = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallBack || src}
            alt={alt}
            onError={handleFallback}
        />
    );
});

export default Image;
