import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Chart = ({ book }) => {
  console.log;

  let displayChart = book;
  console.log(displayChart);

  // Step 1: category-wise book count
  const categoryCounts = {};

  book.forEach((item) => {
    const category = item.book_category;
    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });

  // Step 2: Convert to array for Recharts
  const formattedData = Object.entries(categoryCounts).map(
    ([category, count]) => ({
      name: category,
      Book: count,
    })
  );
  console.log(formattedData);
  return (
    <div>
      <div className="md:container bg-white rounded-md shadow-md p-4 mx-auto">
        <div>
          <h2 className="md:text-[32px] text-[24px] font-semibold">
            <span className="">My </span>Bookshelf Summary
          </h2>
          <p className="md:text-[22px] text-[20px] font-semibold">
            Total Books :  {book.length}
          </p>
          <p className="text-[22px] text-center font-semibold">Categories:</p>
          <div className="flex mt-4 justify-around">
            {formattedData.map((item, index) => (
            
              <p className="text-[19px] font-medium" key={index}>
                {item.name} : <span>{item?.Book}</span>
              </p>
            
          ))}
        </div>
          </div>
      </div>
     
       { book.length > 0 &&
        <div>
                <h2 className="text-[32px] text-center text-[#28BB98] font-semibold">
        <span className="text-blue-600 text-[36px]">C</span>hart by Category
      </h2>
      <div className=" mb-10 mt-2 bg-white h-full  rounded-md shadow-md">
       <ResponsiveContainer width="100%" height={400}>
  <PieChart>
    <Pie
      data={formattedData}
      dataKey="Book"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={150}
      fill="#8884d8"
      label
    >
      {formattedData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
      ))}
    </Pie>
    <Tooltip
      contentStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
    />
  </PieChart>
</ResponsiveContainer>

      </div>
        </div>
       }
    </div>
  );
};

export default Chart;
