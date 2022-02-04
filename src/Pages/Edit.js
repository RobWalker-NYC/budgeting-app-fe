import TransactionEditForm from '../Components/TransactionEditForm';

function Edit() {
    return (
        <div className='Edit'>
            <h1 style={{'margin-left':'25px'}}><strong>Edit Transaction</strong></h1>
            <TransactionEditForm />
        </div>
    );
}

export default Edit;