import Link from "next/link";
import Heading from "./Heading";
import TextInput from "./TextInput";
import Button from "./Button";

const contactDetails = [
  { id: 1, name: "Tel:", value: "+180 603 6035", isLink: false },
  { id: 2, name: "Fax:", value: "+1800 889 9898", isLink: false },
  { id: 3, name: "Email:", value: "mail@demolink.org", isLink: true },
];

const ContactForm = () => {
  return (
    <div className="mt-10 grid md:grid-cols-12 gap-6 md:gap-8">
      <div className="md:col-span-5 lg:col-span-4">
        <Heading isSubHeader subHeader="Contact Info" />
        <p className="text-sm leading-6 text-gray-3000 font-playfair-display mb-3 max-w-full md:max-w-[343px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem,
          accusantium laudantium eos temporibus sit iusto totam, tempora iste
          fuga facilis incidunt recusandae, veniam dolore! Odio magni ab numquam
          adipisci.
        </p>

        <p className="text-gray-3000 leading-paragraph font-playfair-display font-bold mb-3 max-w-full md:max-w-[365px]">
          Real Home INC.
          <br />{" "}
          <span className="uppercase">
            st stephen&apos;s house, colston ave, bristol, bristol bs14st, uk
          </span>
        </p>

        <div className="paragraph flex flex-col gap-1">
          {contactDetails.map((item) => (
            <p key={item.id}>
              {item.name}{" "}
              {item.isLink ? (
                <Link href="#" className="text-red-1000 underline">
                  {item.value}
                </Link>
              ) : (
                <span className="font-medium text-gray-2000">{item.value}</span>
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="md:col-span-7 lg:col-span-8">
        <Heading isSubHeader subHeader="Leave a Comment" />

        <form>
          <div className="flex items-center gap-6 mb-6">
            <TextInput placeholder="Your name" />
            <TextInput placeholder="Your email" />
          </div>

          <TextInput placeholder="Your comment" isTextArea />

          <div className="flex items-center gap-4 mb-6 mt-4">
            <Button className="w-full max-w-[103px] h-[58px]">send</Button>
            <Button className="bg-gray-1000 text-muted w-full max-w-[112px] h-[58px] hover:bg-gray-3000/90 hover:text-white">
              clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
