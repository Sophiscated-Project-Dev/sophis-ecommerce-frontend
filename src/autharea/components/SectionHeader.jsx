const SectionHeader = () => {
    return (
        <div className="recom-header p-3 mb-0">
            <h4>Recommended</h4>
            <span className='btn see-all' to="/">
                see all items &nbsp; &nbsp;
                <img src={require(`../../assets/recom_images/arrow-right.png`)} alt=""/>
            </span>
        </div>
    )
}

export default SectionHeader