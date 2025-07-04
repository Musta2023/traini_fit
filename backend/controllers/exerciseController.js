import Exercise from '../models/Exercise.js'

export const getExercises = async (req, res) => {
  const exercises = await Exercise.find({ user: req.user._id })
  res.json(exercises)
}

export const createExercise = async (req, res) => {
  const { title, description, duration } = req.body
  const exercise = new Exercise({
    title,
    description,
    duration,
    user: req.user._id
  })
  const saved = await exercise.save()
  res.status(201).json(saved)
}
export const updateExercise = async (req, res) => {
  const { id } = req.params
  const { title, description, duration } = req.body

  const exercise = await Exercise.findByIdAndUpdate(
    id,
    { title, description, duration },
    { new: true }
  )

  if (!exercise) {
    return res.status(404).json({ message: 'Exercise not found' })
  }

  res.json(exercise)
}       