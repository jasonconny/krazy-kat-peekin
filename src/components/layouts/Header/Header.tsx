import * as React from 'react';
import LogoLink from 'components/layouts/LogoLink';
import styles from './Header.scss';

interface Props {
    children?: React.ReactNode;
}

const Header: React.FC<Props> = props => {
    const { children } = props;

    return (
        <header className={styles.block}>
            <nav className={styles.nav}>
                <LogoLink
                    href={'/home'}
                    format={'full'}
                />

                <h1>Krazy Kat Peakin'</h1>
            </nav>

            {children}
        </header>
    );
};

export default Header;
