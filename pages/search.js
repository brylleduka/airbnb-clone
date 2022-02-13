import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";

const Search = ({searchResults,querying}) => {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedDate = (date) => {
        return format(new Date(date), "dd MMMM yy")
    } 

    const range = `${formattedDate(startDate)} - ${formattedDate(endDate)}`

    // console.log(searchResults)
    // console.log(querying)

    
	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
			<main className="flex">
				<section className='flex-grow pt-14 px-6'>
					<p className="text-xs">300+ Stays — {range} — for {noOfGuests} guests</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>
					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button-chip">
							Cancellation Flexibility
						</p>
                        <p className="button-chip">
							Type of Place
						</p>
                        <p className="button-chip">
							Price
						</p>
                        <p className="button-chip">
							Rooms and Beds
						</p>
                        <p className="button-chip">
							More Filters
						</p>
					</div>
                    <div className="flex flex-col">
                        {searchResults.map((item, index) => (
                            <InfoCard
                                key={index}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                            />
                        ))}
                    </div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Search;

export async function getServerSideProps(context) {
    
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())
    const querying = context.query
    return {
        props: {
            searchResults,
            querying
         
        }
    }
}
