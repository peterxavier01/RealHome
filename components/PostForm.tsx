import Button from "./Button";
import TextInput from "./TextInput";

interface FormInputValue {
  name: string;
  email: string;
  message: string;
}

interface PostFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  resetForm: () => void;
  isPending: boolean;
  value: FormInputValue;
}

const PostForm = ({
  handleSubmit,
  handleChange,
  resetForm,
  isPending,
  value,
}: PostFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-6 mb-6">
        <TextInput
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={value.name}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          required
          placeholder="Your email"
          value={value.email}
          onChange={handleChange}
        />
      </div>

      <TextInput
        name="message"
        required
        placeholder="Your comment"
        isTextArea
        className="resize-none"
        value={value.message}
        onChange={handleChange}
      />

      <div className="flex items-center gap-4 mb-6 mt-4">
        <Button type="submit" className="w-full max-w-[103px] h-[58px]">
          {isPending ? <div className="loader border-gray-100" /> : "send"}
        </Button>
        <Button
          onClick={resetForm}
          disabled={!value.name && !value.email && !value.message}
          className="disabled:bg-gray-1000 disabled:text-muted w-full max-w-[112px] h-[58px] hover:bg-gray-3000/90 hover:text-white disabled:cursor-not-allowed bg-gray-3000/25 text-slate-700"
        >
          clear
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
