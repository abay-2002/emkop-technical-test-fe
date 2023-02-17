import moment from "moment";

const Footer = () => {
    return (
        <footer className="py-3 my-4 mt-auto">
            
            <p className="text-center text-muted">&copy; {moment().format('YYYY')} <a target="_blank" href="https://akbarangkasa.com/" rel="noreferrer">Akbar Angkasa</a></p>
        </footer>
    );
};

export default Footer;