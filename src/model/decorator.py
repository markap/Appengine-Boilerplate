from functools import wraps
import json



def json_out(f):
    @wraps(f)
    def wrapped(*args, **kwargs):
        r = f(*args, **kwargs)
        return args[0].response.out.write(json.dumps(r, default=lambda o: o.__dict__))

    return wrapped
