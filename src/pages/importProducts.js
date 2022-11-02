import React, { useState } from 'react';
import { importProducts } from '../api/product'

const ImportProducts = () => {
	const [files, setFiles] = useState(null);

	const onChange = (event) => {
		setFiles(event.target.files);
	};

	const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
		for (let i = 0; i < files.length; i++) {
			formData.append(`file${i}`, files[i]);
		}
    importProducts(formData).then((resposne) => console.log(resposne))
	};

	return(
   	<React.Fragment>
			<form class="container mt-5" onSubmit={onSubmit}>
				<div class="card text-center">
					<div class="card-header">
						CSV Import
					</div>
					<div class="card-body">
						<h5 class="card-title">Product CSV Imports</h5>
						<p class="card-text">You can upload multiple csv files with product data</p>

						<div class="input-group mb-3 w-75 offset-2">
							<div class="custom-file">
								<input type="file" class="custom-file-input" name="file" accept=".csv" multiple onChange={onChange} />
								<label class="custom-file-label" for="inputGroupFile02">{files?.length || 0} Files Selected</label>
							</div>
							<div class="input-group-append">
								<button class="btn btn-primary" type='submit'>Submit</button>
							</div>
						</div>

					</div>
					<div class="card-footer text-muted">
						Powered by Cenix
					</div>
				</div>

			</form>
		</React.Fragment>
	)
}

export default ImportProducts;
