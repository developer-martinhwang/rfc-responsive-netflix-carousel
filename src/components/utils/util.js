export const Genre = (num) => {
    let genre = ''
    switch (num) {
        case 28: 
            genre = "action"
            break
        case 53: 
            genre = "Thriller"
            break
        case 16: 
            genre = "animation"
            break
        case 35: 
            genre = "comedy"
            break
        case 80: 
            genre = "crime"
            break
        case 12: 
            genre = "adventure"
            break
        case 14: 
            genre = "fantasy"
            break
        default: 
            genre = "no info"
    }
    return genre
}