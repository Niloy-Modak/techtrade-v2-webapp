import React from 'react';

const ProductDetailsPage = async ({params} : {params : Promise<string>}) => {

    const slug = await params;
    // console.log(slug);
    return (
        <div>
            
        </div>
    );
};

export default ProductDetailsPage;