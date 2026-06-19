import PropertyCard from "../property/property-card";

const mockData = [
    {
        id: 1,
        title: "Modern Apartment",
        city: "Tehran",
        price: 120000,
        image: "https://res.cloudinary.com/dg4gfkxip/image/upload/v1781337885/realnest/in2hgzejbm0ipsrm7kc6.jpg"
    },
    {
        id: 2,
        title: "Luxury Villa",
        city: "Shiraz",
        price: 350000,
        image: "https://res.cloudinary.com/dg4gfkxip/image/upload/v1781337885/realnest/in2hgzejbm0ipsrm7kc6.jpg"
    },
    {
        id: 3,
        title: "Studio Room",
        city: "Isfahan",
        price: 80000,
        image: "https://res.cloudinary.com/dg4gfkxip/image/upload/v1781337885/realnest/in2hgzejbm0ipsrm7kc6.jpg"
    },
    {
        id: 4,
        title: "Studio Room",
        city: "Isfahan",
        price: 80000,
        image: "https://res.cloudinary.com/dg4gfkxip/image/upload/v1781337885/realnest/in2hgzejbm0ipsrm7kc6.jpg"
    },
    {
        id: 5,
        title: "Studio Room",
        city: "Isfahan",
        price: 80000,
        image: "https://res.cloudinary.com/dg4gfkxip/image/upload/v1781337885/realnest/in2hgzejbm0ipsrm7kc6.jpg"
    },
];

export default function FeaturedProperties() {
    return (
        <section className="space-y-6">

            <h2 className="text-2xl font-bold">
                Featured Properties
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

                {mockData.map((item) => (
                    <PropertyCard
                        key={item.id}
                        title={item.title}
                        city={item.city}
                        price={item.price}
                        image={item.image}
                    />
                ))}

            </div>

        </section>
    );
}