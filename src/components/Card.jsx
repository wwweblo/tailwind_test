const CardHeader = (props) => {
    return (
      <h1 className="text-2xl font-bold dark:text-(--fuck)">
        {props.children}
      </h1>
    );
  };
  
  const CardText = (props) => {
    return (
      <p className="dark:text-white">{props.children}</p>
    );
  };
  
  const Card = (props) => {
    return (
      <div className="flex flex-col md:flex-row align-middle rounded-2xl items-center h-fit bg-white dark:bg-neutral-700 p-5 shadow">
            <img className="w-[5rem]" src={props.img} />
            <div className="p-5 flex-3">
            {props.children}
            </div>
      </div>
    );
  };
  
  export { Card, CardHeader, CardText };