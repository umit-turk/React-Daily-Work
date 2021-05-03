import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ( //parametreler
    { categories,
        product,
        onSave,
        onChange,
        errors }
) => {
    return (
        <form onSubmit={onSave}> {/* Bizim productDetail submit olduğu zaman onSave çalışacak */}
            <h2>{product.id ? "Günceller" : "Ekle"}</h2>
            <TextInput
                name="productName"
                label="ProductName"
                value={product.productName}
                onChange={onChange}
                error={errors.productName}
            /> {/* biz burada TexpInputa proplar gönderiyoruz */}

            <SelectInput name="categoryId" label="Category" value={product.categoryId || ""} defaultOption="Seçiniz" options={categories.map(category => ({
                value: category.id,
                text: category.categoryName
            }))}
                onChange={onChange}
                error={errors.categoryId}

            />

            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error={errors.unitPrice}
            />

            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error={errors.quantityPerUnit}
            />

            <TextInput
                name="unitsInStock"
                label="Units In Stock"
                value={product.unitsInStock}
                onChange={onChange}
                error={errors.unitsInStock}
            />


            <button type="submit" className="btn btn-success">Kaydet</button>
        </form>
    )
}

export default ProductDetail;