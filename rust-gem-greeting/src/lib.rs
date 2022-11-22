fn say() -> String {
    format!("Hello, World!")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = say();
        assert_eq!(result, "Hello, World!");
    }
}
