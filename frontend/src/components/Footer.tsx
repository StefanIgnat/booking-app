const Footer = () => {
    return (
        <div className="bg-grey-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-3xl text-orange-800 font-bold tracking-tight ">
                    Belair.com
                </span>
                <span className="text-orange-800 font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">
                        Privacy Policy
                    </p>
                    <p className="cursor-pointer">
                        Terms of Service 
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Footer;