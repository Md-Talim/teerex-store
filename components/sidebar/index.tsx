interface CheckboxProps {
  label: string;
  name: string;
  value: string;
}

const Checkbox = ({ label, name, value }: CheckboxProps) => (
  <div className="flex items-center gap-x-2">
    <input type="checkbox" id={value} name={name} value={value} />
    <label htmlFor={value}>{label}</label>
  </div>
);

const ColorFilter = () => {
  const filters = [
    { label: "Black", value: "black" },
    { label: "Blue", value: "blue" },
    { label: "Pink", value: "pink" },
    { label: "Green", value: "green" },
    { label: "Red", value: "red" },
    { label: "Grey", value: "grey" },
    { label: "Purple", value: "purple" },
    { label: "White", value: "white" },
    { label: "Yellow", value: "yellow" },
  ];

  return (
    <form className="space-y-3">
      <h3 className="text-xl font-bold">Colour</h3>

      <div className="space-y-2">
        {filters.map((item, index) => (
          <Checkbox key={index} name="color" {...item} />
        ))}
      </div>
    </form>
  );
};

const GenderSelector = () => (
  <form className="space-y-3">
    <h3 className="text-xl font-bold">Gender</h3>

    <div className="flex gap-x-2 items-center">
      <input type="radio" id="men" name="gender" value="men" />
      <label htmlFor="men">Men</label>
    </div>

    <div className="flex gap-x-2 items-center">
      <input type="radio" id="women" name="gender" value="women" />
      <label htmlFor="women">Women</label>
    </div>
  </form>
);

const PriceFilter = () => {
  const filters = [
    { label: "0-250", value: "250" },
    { label: "251-450", value: "450" },
    { label: "451-500", value: "500" },
  ];

  return (
    <form className="space-y-3">
      <h3 className="text-xl font-bold">Price</h3>

      <div className="space-y-2">
        {filters.map((item, index) => (
          <Checkbox key={index} name="color" {...item} />
        ))}
      </div>
    </form>
  );
};

const TypeFilter = () => {
  const filters = [
    { label: "Polo", value: "polo" },
    { label: "Hoodie", value: "hoodie" },
    { label: "Basic", value: "basic" },
  ];

  return (
    <form className="space-y-3">
      <h3 className="text-xl font-bold">Type</h3>

      <div className="space-y-2">
        {filters.map((item, index) => (
          <Checkbox key={index} name="color" {...item} />
        ))}
      </div>
    </form>
  );
};

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <ColorFilter />
      <GenderSelector />
      <PriceFilter />
      <TypeFilter />
    </aside>
  );
};

export default Sidebar;
