from unet_wrapper import unet_wrapper

U = unet_wrapper("/raid/mpsych/CACTAS/DATA/Nathan Arnett Calcification/images.npy", 
"/raid/mpsych/CACTAS/DATA/Nathan Arnett Calcification/labels.npy")

x, y = U.load_npy()
model, x_val, y_val = U.train(x, y)
a_binary = U.predict(model, x_val)
plot = U.plot_resuts(a_binary, x_val, y_val)