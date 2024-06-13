interface ILink {
  id: number;
  href: string;
  name: string;
}

interface LinkGroupProps {
  groupTitle: string;
  linkArray: ILink[];
}

const LinkGroup = ({ groupTitle, linkArray }: LinkGroupProps) => {
  return (
    <div>
      <p className="text-[28px] text-white font-light leading-heading mb-4 font-raleway">
        {groupTitle}
      </p>
      <ul>
        {linkArray.map((link) => (
          <li
            key={link.id}
            className="text-[15px] leading-[30px] font-playfair-display"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkGroup;
