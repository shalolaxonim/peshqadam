import Button from "../button";
import { Controller, useForm } from "react-hook-form";
import { Input, Form } from "antd";
import Title from "../title";
import TextArea from "antd/es/input/TextArea";

const ContactForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    return data;
  };

  return (
    <div className="flex justify-center items-center flex-col my-4 md:my-[50px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 p-8 rounded-3xl shadow-xl md:w-[75%] lg:w-[35%] overflow-hidden"
        style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Title className="text-secondary dark:text-textDark text-center">
          savollar, takliflar va mulohazalaringizni bizga yuboring
        </Title>
        <div className="flex flex-col gap-4">
          {/* Name Field */}
          <Form.Item>
            <label className="text-qora dark:text-textDark font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
              Ismingiz
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Ismingizni kiriting" }}
              render={({ field }) => (
                <Input
                  placeholder="Ismingizni kiriting"
                  {...field}
                  variant="filled"
                  className="h-12 dark:text-textDark dark:placeholder:text-textDark dark:bg-[#0e1628]"
                />
              )}
            />
          </Form.Item>

          {/* Phone Field */}
          <Form.Item>
            <label className="text-qora dark:text-textDark font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
              Telefon raqamingiz
            </label>
            <Controller
              name="telefon raqam"
              control={control}
              rules={{
                required: "Telefon raqamingizni kiriting",
                pattern: {
                  value: /^\+998\d{9}$/, // Must start with +998 and have exactly 9 digits after
                  message: "To'g'ri telefon raqamini kiriting (+998901234567)",
                },
              }}
              render={({ field }) => (
                <Input
                  type="tel"
                  {...field}
                  placeholder="+998901234567"
                  maxLength={13}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only "+" at the beginning and digits after
                    if (/^\+?\d*$/.test(value)) {
                      field.onChange(value);
                    }
                  }}
                  variant="filled"
                  className="h-12 dark:text-textDark dark:placeholder:text-textDark dark:bg-[#0e1628]"
                />
              )}
            />
          </Form.Item>
          {/* Comments Field */}
          <Form.Item>
            <label className="text-qora dark:text-textDark font-cormorant sm:text-cormorantSmall lg:text-cormorantBig">
              Savol, taklif va mulohazalar
            </label>
            <Controller
              name="savol, taklif va mulohazalar"
              control={control}
              rules={{
                required: "Taklif va mulohazalaringizni kiriting",
              }}
              render={({ field }) => (
                <TextArea
                  placeholder="Taklif va mulohazalaringizni kiriting"
                  {...field}
                  rows={5}
                  className="bg-gray-100 border-none focus:ring-2 focus:ring-gray-300 rounded-[8px] dark:text-textDark dark:placeholder:text-textDark dark:bg-[#0e1628]"
                />
              )}
            />
          </Form.Item>

          {/* Submit Button */}
          <div className="self-center ">
            <Button type="submit">Yuborish</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
