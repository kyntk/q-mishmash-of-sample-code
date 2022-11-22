use magnus::{define_module, function, Error};

fn say() -> String {
    format!("Hello, World!")
}

#[magnus::init]
fn init() -> Result<(), Error> {
    let module = define_module("Greeting")?;

    module.define_module_function("say", function!(say, 0))?;

    Ok(())
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
