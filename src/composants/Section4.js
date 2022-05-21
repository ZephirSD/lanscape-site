import { Button, Input, Textarea } from "./modules/Forms";

function Section4() {
    return ( 
        <>
            <section className="section4">
                <h1 className="titre-about" data-aos="fade-right">Contact</h1>
                <div className="block-contact">
                    <form>
                        <Input type={"email"} label={"Email"}/>
                        <Textarea rows={"10"} label={"Message"} maxLength={"100"}/>
                        <Input type={"checkbox"} label={"J'accepte les conditions de confidentialté aux normes RGPD"}/>
                        <Button type={"button"} value={"Envoyer"}/>
                    </form>
                </div>
            </section>
        </> 
    );
}

export default Section4;