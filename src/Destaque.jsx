function Destaque(props) {
    return (
        <>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
                <img src="https://placehold.co/200" alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
                <p>Destaque {props.numero}</p>
            </div>
        </>
    )
}

export default Destaque