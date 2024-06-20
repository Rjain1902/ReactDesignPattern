//Higher Order Component
//Take component as an input and wrapes it with console.log or any value

export function WithSpecialCounter(Component) {
    return function(props){
        console.log('component is rendered')
        return <div>
            <h3>Below is the counter value</h3>
            <Component {...props} specialChar={'*'}/>
        </div>

    }
       
}
