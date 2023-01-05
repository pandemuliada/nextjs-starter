import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CollapsibleContext = createContext({ openedItem: null });

const Collapsible = (props) => {
  const { defaultOpen = null, children } = props;
  const [openedItem, setOpenedItem] = useState(defaultOpen || null);

  return (
    <CollapsibleContext.Provider value={{ openedItem, setOpenedItem }}>
      {children}
    </CollapsibleContext.Provider>
  );
};

const Item = (props) => {
  const {
    label,
    id = undefined,
    children,
    openIcon = <AiOutlineMinusCircle size={20} />,
    closedIcon = <AiOutlinePlusCircle size={20} />,
    className,
    ...restProps
  } = props;
  const { openedItem, setOpenedItem } = useContext(CollapsibleContext);

  return (
    <div
      className={classNames(
        "border p-5 rounded-xl transition-all",
        { "border-primary": openedItem == id },
        className
      )}
      {...restProps}
    >
      <motion.div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            openedItem == id ? setOpenedItem(null) : setOpenedItem(id);
          }}
        >
          <span className="font-medium text-lg">{label}</span>
          <span>{openedItem == id ? openIcon : closedIcon}</span>
        </div>

        <AnimatePresence>
          {openedItem == id && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: {
                  opacity: 0,
                  height: 0,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.div
                // style={{ padding: "0px 16px 16px 16px" }}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, transition: { delay: 0.2 } },
                  collapsed: { opacity: 0 },
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

Collapsible.Item = Item;

export default Collapsible;
