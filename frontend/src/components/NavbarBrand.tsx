import Link from "next/link";

import localFont from "next/font/local";

const bricolageGrotesqueRegularFont = localFont({
    src: '../fonts/BricolageGrotesque-Regular.ttf',
    display: 'swap',
    variable: '--font-bricolage-grotesque-regular'
});

function NavbarBrand() {
    return (
        <h1>
            <Link
                className={`text-3xl ${bricolageGrotesqueRegularFont.variable} text-white font-normal tracking-wider`}
                href='/'
            >
                Shop4Every1
            </Link>
        </h1>
    );
}

export default NavbarBrand;