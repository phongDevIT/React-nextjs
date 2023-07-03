import Link from "next/link";
import PropertyItem from "@/modules/PropertyItem";
import React from "react";
import { getProperties } from "@/store/properte.service";
import { LayoutMain } from "@/components/layout";
import { PropertyItemData } from "../types/property.type";
import { useQuery } from "@tanstack/react-query";

const property = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["properties"],
        queryFn: () => getProperties(),
        // refetchOnWindowFocus: false,
        // cacheTime: 10 * 60 * 1000,
        // staleTime: 1000 * 60 * 1,
    });
    const properties = data;
    // const [data, setData] = React.useState<any[]>([]);
    // const [loading, setLoading] = React.useState<boolean[]>(false);
    // const [error, setError] = React.useState<any[]>(null);
    // useEffect(() => {
    //     async function fetchingProperties() {
    //         setLoading(true);
    //         try {
    //             const res = await axios.get(`${API_URL}/property`);
    //             console.log("res: ", res);
    //             if (res.status === 200) setData(res.data);
    //         } catch (error) {
    //             console.log("error: ", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchingProperties();
    // }, []);
    return (
        <LayoutMain>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-[25px] font-bold text-primaryText">
                    Property List
                </h1>
                <Link
                    href="/property/create"
                    className="flex items-end justify-center bg-primary py-3 px-5 rounded-lg text-white font-medium text-sm leading-normal"
                >
                    + Add Property
                </Link>
            </div>
            <div className="p-5 bg-white rounded-2xl">
                <div aria-label="filter"></div>
                <div
                    aria-label="list"
                    className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
                >
                    {properties &&
                        properties.length > 0 &&
                        properties.map(
                            (item: PropertyItemData, index: number) => (
                                <PropertyItem
                                    item={item}
                                    key={item.id}
                                ></PropertyItem>
                            )
                        )}
                </div>
                <div
                    aria-label="pagination"
                    className="flex items-center justify-between"
                >
                    <p className="text-gray80">Showing 1 to 10 Propertys</p>
                    <div className="flex items-center gap-[10px]">
                        <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
                            1
                        </button>
                        <button className="flex items-center justify-center rounded-lg w-9 text-gray80 h-9">
                            2
                        </button>
                    </div>
                </div>
            </div>
        </LayoutMain>
    );
};

export default property;
