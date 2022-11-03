import React, { useState } from 'react';
import { importProducts } from '../api/product'
import SweetAlert from '../components/sweetAlert';

function ImportProducts(){
	const [files, setFiles] = useState(null);

	const onChange = (event) => {
		setFiles(event.target.files);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (files) {
			const formData = new FormData();
			for (let i = 0; i < files.length; i++) {
				formData.append(`file${i}`, files[i]);
			}
			importProducts(formData)
		}
		else {
			SweetAlert.error('Please select one or more files to Proceed')
		}
	};

	return(
   	<>
			<form className="container mt-5" onSubmit={onSubmit}>
				<div className="card text-center">
					<div className="card-header">
						CSV Import
					</div>
					<div className="card-body">
						<h5 className="card-title">Product CSV Imports</h5>
						<p className="card-text">You can upload multiple csv files with product data</p>

						<div className="input-group mb-3 w-75 offset-2">
							<div className="custom-file">
								<input type="file" className="custom-file-input" name="file" accept=".csv" multiple onChange={onChange} />
								<label className="custom-file-label">{files?.length || 0} Files Selected</label>
							</div>
							<div className="input-group-append">
								<button className="btn btn-primary" type='submit'>Submit</button>
							</div>
						</div>
						
					</div>
					<div className="card-footer text-muted">
						Powered by Cenix
					</div>
				</div>
				
			</form>
		</>
	)
}

export default ImportProducts
